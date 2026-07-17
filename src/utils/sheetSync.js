import { GOOGLE_SHEET_WEBAPP_URL, SHEET_SYNC_SECRET } from "../config";

// Hàng đợi các kết quả chưa gửi được lên Google Sheet (mất mạng, WiFi
// phòng máy chập chờn...) - lưu tạm vào localStorage để tự động gửi lại
// khi có mạng trở lại, tránh mất kết quả của học sinh.
const QUEUE_KEY = "giuaki1-tin12-sheet-queue";

const isConfigured = () => Boolean(GOOGLE_SHEET_WEBAPP_URL);

const loadQueue = () => {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveQueue = (queue) => {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch {
    // localStorage có thể không khả dụng - bỏ qua
  }
};

// Google Apps Script Web App không trả về header CORS hợp lệ khi đọc
// response, nên dùng mode "no-cors" (gửi được, không đọc được kết quả).
// Content-Type phải là "text/plain" để trình duyệt không gửi preflight
// OPTIONS mà Apps Script không xử lý.
const postToSheet = async (payload) => {
  if (!isConfigured()) return false;
  try {
    await fetch(GOOGLE_SHEET_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, secret: SHEET_SYNC_SECRET }),
    });
    return true;
  } catch {
    return false;
  }
};

export const sendResultToSheet = async (payload) => {
  if (!isConfigured()) return "not_configured";

  const sent = await postToSheet(payload);
  if (sent) return "sent";

  const queue = loadQueue();
  queue.push(payload);
  saveQueue(queue);
  return "queued";
};

export const flushQueuedResults = async () => {
  if (!isConfigured()) return;
  const queue = loadQueue();
  if (queue.length === 0) return;

  const remaining = [];
  for (const item of queue) {
    const sent = await postToSheet(item);
    if (!sent) remaining.push(item);
  }
  saveQueue(remaining);
};
