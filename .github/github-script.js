module.exports = async ({ github, context }) => {
  github.rest.repos.createCommitComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.payload.pull_request.head.sha,
    body: `
<details><summary>スライドのレンダリング結果</summary>
<image src="https://github.com/${context.repo.owner}/${context.repo.repo}/raw/${context.sha}/example/example.001.png" />
</details>
<image src="https://github.com/${context.repo.owner}/${context.repo.repo}/raw/${context.sha}/example/example.002.png" />
</details>
    `,
  });
};
