import "./styles.css";

const onClickAdd = () => {
  // 入力内容を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストにTODOを追加
const addIncompleteList = (inputText) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttonタグ(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // divタグ以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ(戻す)生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 親タグ(div)を完了リストから削除
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      // TODO内容テキストを取得
      const text = backTarget.firstElementChild.innerText;

      // 未完了リストにTODOを追加
      addIncompleteList(text);
    });

    // divタグに要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストにTODOを追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // buttonタグ(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストにTODOを追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
