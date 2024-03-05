import { processUserQuery } from "../src/booking/booking_prompts.js";
// import { tests } from "../benchmark/benchmark.js";

import { config } from "./config.js";

import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.route({
  method: "GET",
  url: "/ai_search",
  schema: {
    querystring: {
      type: "object",
      properties: {
        search: { type: "string" },
      },
      required: ["search"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          status: { type: "string" },
          url: { type: "string" },
        },
      },
    },
  },

  handler: async (request, reply) => {
    const url = await processUserQuery(request.query.search);
    return { status: "success", url: url };
  },
});

try {
  await fastify.listen({ port: config.PORT });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

// processUserQuery(tests[6].query);
