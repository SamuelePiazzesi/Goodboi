import { Duty } from "../../entities/Duty";
import { MyContext } from "../../types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class DutyResolver {
	@Query(() => [Duty])
	duties(@Ctx() { em }: MyContext): Promise<Duty[]> {
		return em.find(Duty, {});
	}

	@Query(() => Duty, { nullable: true })
	duty(
		@Ctx() { em }: MyContext,
		@Arg("id", () => Int) id: number
	): Promise<Duty | null> {
		return em.findOne(Duty, { id });
  }
  
  @Mutation(() => Duty)
  createDuty(@Ctx() { em }: MyContext, @Arg('title') title: string): Promise<Duty> {
    return em.persistAndFlush(Duty, {title})
  }
}
