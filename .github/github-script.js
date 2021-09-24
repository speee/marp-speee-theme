module.exports = async ({ github, context }) => {
  github.rest.repos.createCommitComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.payload.pull_request.head.sha,
    body: "👋 Thanks for reporting!",
  });
};
