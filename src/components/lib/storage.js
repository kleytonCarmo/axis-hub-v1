export function getStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return fallback;
    }

    const parsed = JSON.parse(saved);

    if (Array.isArray(fallback) && !Array.isArray(parsed)) {
      return fallback;
    }

    return parsed;
  } catch {
    return fallback;
  }
}

export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const STORAGE_KEYS = {
  checkpoints: "axis-checkpoints",
  performance: "axis-performance",
  calories: "axis-calorie-week",
  dailyLogs: "axis-daily-logs",
};
