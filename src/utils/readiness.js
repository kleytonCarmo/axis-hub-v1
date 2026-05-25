export function calculateReadiness(data) {
  const recovery = Number(data.recovery || 80);
  const sleepScore = Math.min(100, (Number(data.sleep || 7.5) / 8) * 100);
  const energyScore = Number(data.energy || 8) * 10;
  const focusScore = Number(data.focus || 8) * 10;
  const strain = Number(data.strain || 12);
  const strainScore = strain > 16 ? 60 : strain > 12 ? 75 : 90;

  return Math.round(
    recovery * 0.35 +
      sleepScore * 0.2 +
      energyScore * 0.15 +
      focusScore * 0.15 +
      strainScore * 0.15
  );
}

export function getReadinessColor(readiness) {
  if (readiness >= 85) return "#86EFAC";
  if (readiness >= 70) return "#FCD34D";
  return "#FCA5A5";
}

export function getTrainingMode(data) {
  const recovery = Number(data.recovery || 80);
  const sleep = Number(data.sleep || 7.5);
  const strain = Number(data.strain || 12);
  const energy = Number(data.energy || 8);

  if (recovery < 60 || sleep < 6.5) return "Recovery Mode";
  if (strain > 16 && recovery < 75) return "Control Mode";
  if (energy <= 5) return "Rebuild Mode";

  return "Performance Mode";
}
