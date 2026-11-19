document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.pathname.includes("previous-year-question-paper")) {
    return;
  }

  const isQuestion = (element) => {
    if (/^H[1-6]$/.test(element.tagName)) {
      return true;
    }

    if (element.tagName !== "P") {
      return false;
    }

    const firstStrong = element.querySelector("strong");
    return firstStrong !== null && /^\([ivx]+\)/i.test(firstStrong.textContent.trim());
  };

  document.querySelectorAll("p").forEach((answer) => {
    const label = answer.querySelector("strong");
    if (label === null || label.textContent.trim() !== "Answer:") {
      return;
    }

    const disclosure = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = "Show answer";
    disclosure.append(summary);

    const answerContent = document.createElement("div");
    answerContent.className = "answer-content";
    disclosure.append(answerContent);
    answer.parentNode.insertBefore(disclosure, answer);

    label.remove();
    answerContent.append(answer);

    let next = disclosure.nextElementSibling;
    while (next !== null && !isQuestion(next)) {
      const current = next;
      next = next.nextElementSibling;
      answerContent.append(current);
    }

    disclosure.addEventListener("toggle", () => {
      summary.textContent = disclosure.open ? "Hide answer" : "Show answer";
    });
  });
});