// POST /stock/multiple
import { Redis } from "@upstash/redis";

export default eventHandler(async (event) => {
	const redis = new Redis({
		url: process.env.UPSTASH_REDIS_REST_URL,
		token: process.env.UPSTASH_REDIS_REST_TOKEN,
	});

	const { param } = event.context.params;

	try {
		const data = await redis.get<string>(param);

		return new Response(data);
	} catch (error) {
		return Response.json({ message: error.message }, { status: 500 });
	}
});
