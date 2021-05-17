interface answer {
  hello: string;
  world: string;
}

function handleRequest(params) {
  const json = JSON.stringify({
    message: "Hello from Deno Deploy",
  });

  return new Response(json, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}

function getAnswer(param: number): answer {
  const anAnswer: answer = {
    hello: "hello",
    world: "world",
  };
  return anAnswer;
}

function createResponse(): answer[] {
  const answers: answer[] = [];
  answers.push(getAnswer(1));
  answers.push(getAnswer(2));
  return answers;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
