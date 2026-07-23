// YouTube integration for Tony Bell's free Corporate Finance course.
// The playlist maps 1:1 to lessons FIN 1 … FIN 71 (verified in playlist order).

export const PLAYLIST_ID = 'PLSlzC-HFo7w6YbU8G7jyUt6F_qjuCzfUK'
export const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`

// FIN number -> YouTube video ID (ordered from the official playlist).
export const VIDEO_IDS = {
  1: 'n9AitYHbOY0',
  2: 'ikXCLArs6Lw',
  3: 'r8h7WKkxuB0',
  4: 'iveP3BMdQbU',
  5: 'vRk6vdRJDdg',
  6: 'dPbamCmljQ0',
  7: 'ELhNNdIedEQ',
  8: 'cn52_ybq13c',
  9: 'INMAPlBqp24',
  10: 'JQwDRoutCJU',
  11: 'yG6cKGcgPLY',
  12: '6WrRlvobe14',
  13: 'ApaZ8p4UB0Q',
  14: 'kaYz15vwb9k',
  15: 'J1NF_qGcOCc',
  16: 'DEdE5S0Dh6g',
  17: '_kp8rpJIS-Q',
  18: 'TkIkGz8h0cM',
  19: 'D6-ATAR5QY0',
  20: 'oeMFDVycrUc',
  21: 'Adcwnyowsug',
  22: 'on2YTJSOO84',
  23: 'MeGcynRbH7A',
  24: 'Hhw_T78-lXQ',
  25: '9xXGNdxWslc',
  26: 'cNRyc6ZfNiY',
  27: 'zU5TeiC6RPk',
  28: 'gEoJE3NInSk',
  29: 'B2URml7J5YM',
  30: 'FrU2wo0bv7k',
  31: 'roZnSGAWUms',
  32: 'el8KUFhGi8o',
  33: 'ynP5ULJHEO8',
  34: 'nw-tYACfBX0',
  35: 'a2CpD6SMhqA',
  36: 'netYghREnaM',
  37: 'gk3L1JjJVyE',
  38: 'LprmS7xxX1Y',
  39: 'FsW6qd6e4DI',
  40: 'SuyigPbS37I',
  41: 'KiwowuHQxr4',
  42: '6tr7A2UAD1A',
  43: 'JSupBIphBbU',
  44: 'NnNUXxhEwJA',
  45: 'uwIX76uZhPE',
  46: 'gc5x1brHc0k',
  47: 'xLXZ97Jp0bY',
  48: 'dR-z3EoROYU',
  49: '13lUBWYN7Ik',
  50: 'YZIciHqvdH4',
  51: 'qSHKEn0BEv8',
  52: '5DXhPFUeaks',
  53: 'Zn7c6zBYXYQ',
  54: 'Ri8-UMuZJSY',
  55: 'HV79maTSAAM',
  56: 'ZMju97yfrm0',
  57: 'ThIA1EL9VUw',
  58: 'XTXAzWR6E0U',
  59: 'PB4HMIHJgQc',
  60: 'Oif2fXILuTg',
  61: 'hp-V8WsD8fg',
  62: 'tk7DwcHSnh0',
  63: 'V9LHHMR_d2s',
  64: '0IYzWkF2Q6Y',
  65: 'eril3RRpcSI',
  66: 'Ctss1bGdH8E',
  67: 'ZCa8ycUSB74',
  68: 'dF7wF25QWyY',
  69: '_8oQOaoUrFU',
  70: 'gYQ_Ps8dou0',
  71: 'G9c80PcgbDY',
}

// Parse the FIN number out of a lesson code like "FIN 27".
export function finNumber(code = '') {
  const m = String(code).match(/(\d{1,3})/)
  return m ? parseInt(m[1], 10) : null
}

// Best-effort YouTube URL for a lesson. If we have the exact video ID we open
// it inside the playlist; otherwise we fall back to a playlist search for the title.
export function lessonVideoUrl(lesson) {
  const num = finNumber(lesson?.code)
  const id = num != null ? VIDEO_IDS[num] : null
  if (id) {
    return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}&index=${num}`
  }
  // Fallback: search YouTube for the lesson within the course.
  const query = encodeURIComponent(`Tony Bell ${lesson?.code || ''} ${lesson?.title || ''}`.trim())
  return `https://www.youtube.com/results?search_query=${query}`
}
