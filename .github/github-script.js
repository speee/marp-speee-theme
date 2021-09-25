module.exports = async ({ github, context }) => {
  github.rest.repos.createCommitComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.payload.pull_request.head.sha,
    body: `
<details>

<summary>スライドのレンダリング結果</summary>

<img src="https://github.com/${context.repo.owner}/${context.repo.repo}/raw/${context.sha}/example/example.001.png" height="360px" />
<img src="https://github.com/${context.repo.owner}/${context.repo.repo}/raw/${context.sha}/example/example.002.png" height="360px" />

</details>
    `,
  });
};
