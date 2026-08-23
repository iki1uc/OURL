// COACH-KERNEL.js – Humanistischer Agent
// CLOSED · NO-CLONE · BUSINESS

export function coachKernel(input) {
  const coach = COACH;
  const result = coach.solve(input);
  
  return {
    status: result.status || "bereit",
    focus: result.area || null,
    solution: result,
    aemter: result.aemter || [],
    steps: result.steps || [],
    resources: result.resources || null,
    sense: coach.sense()
  };
}
