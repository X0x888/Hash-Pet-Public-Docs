(function () {
  const config = window.HASHPET_SITE_CONFIG || {};

  const yearNodes = document.querySelectorAll("[data-year]");
  const nowYear = String(new Date().getFullYear());
  yearNodes.forEach((n) => {
    n.textContent = nowYear;
  });

  const feedbackNodes = document.querySelectorAll("[data-feedback-link]");
  feedbackNodes.forEach((n) => {
    if (!(n instanceof HTMLAnchorElement)) return;
    if (typeof config.feedbackFormUrl !== "string") return;
    n.href = config.feedbackFormUrl;
  });

  const repoNodes = document.querySelectorAll("[data-repo-link]");
  repoNodes.forEach((n) => {
    if (!(n instanceof HTMLAnchorElement)) return;
    if (typeof config.githubRepoUrl !== "string") return;
    n.href = config.githubRepoUrl;
  });
})();
