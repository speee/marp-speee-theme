module.exports = async ({ github, context, core }) => {
  github.repos.createCommitComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.sha,
    body: "👋 Thanks for reporting!",
  });
};
