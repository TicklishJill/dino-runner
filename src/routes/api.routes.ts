import { Router } from "@oak/oak/router";

export const apiRouter = new Router({prefix:"/api"});

//Health check endpoint

apiRouter.get("/health",(ctx)=>{
	ctx.response.body ={
		status:"ok",
		message:"🦕 Stage 1 - Dino server is healthy!",
	};
});
