interface answer {
  hello: string;
  world: string;
}

function handleRequest(params) {
  const res = createResponse();
  const json = JSON.stringify(res);

  return new Response(json, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}

function getAnswer(): answer {
  const anAnswer: answer = {
    hello: "hello",
    world: "world",
  };
  return anAnswer;
}

function createResponse(): answer[] {
  const answers: answer[] = [];
  answers.push(getAnswer());
  answers.push(getAnswer());
  return answers;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
