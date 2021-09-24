module.exports = async ({ github, context, core }) => {
  var result = github.rest.repos.createCommitComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.sha,
    body: "👋 Thanks for reporting!",
  });
  console.log(result);
};
