module.exports = async ({ github, context, core }) => {
  github.rest.repos.createCommitComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.sha,
    body: "👋 Thanks for reporting!",
  });
};
