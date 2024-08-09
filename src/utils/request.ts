const blacklistedTargets = (
  process.env.BLACKLISTED_TARGETS?.replaceAll(' ', '').split(',') ?? []
).concat(['127.0.0.1', 'localhost', '[::1]']);

export function checkBlacklistedTarget(target: string) {
  return blacklistedTargets.find((v) => target.includes(v));
}

export function isValidURL(target: string) {
  try {
    new URL(target);
    return true;
  } catch {
    return false;
  }
 }
