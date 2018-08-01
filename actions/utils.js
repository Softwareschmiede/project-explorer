export const SHOW_NEW_PROJECT_MODAL = 'SHOW_NEW_PROJECT_MODAL';
export const HIDE_NEW_PROJECT_MODAL = 'HIDE_NEW_PROJECT_MODAL';

export function showNewProjectModal() {
  return { type: SHOW_NEW_PROJECT_MODAL };
}

export function hideNewProjectModal() {
  return { type: HIDE_NEW_PROJECT_MODAL }
}
