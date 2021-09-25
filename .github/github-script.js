module.exports = async ({ github, context }) => {
  github.rest.repos.createCommitComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.payload.pull_request.head.sha,
    body: `👋 Thanks for reporting!
<image src="https://github.com/speee/marp-speee-theme/raw/1ed497697d73bb5b56820ac07a55272096a3d7c9/example/example.001.png" />
    `,
  });
};
