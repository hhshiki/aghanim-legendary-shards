import { cleanseName } from "./helper";

interface HeroShardsProps {
  hero: string;
  allHeroes: Function;
}

export default function HeroShards(props: HeroShardsProps) {
  if (!props.hero) {
    return <></>;
  }
  let heroSkills = props.allHeroes(props.hero);
  let skillNames = Object.keys(heroSkills);
  return (
    <>
      {skillNames.map((skill, idx) => {
        let heroName = cleanseName(props.hero);
        if (heroName == "sand_king") {
          heroName = "sandking";
        }
        const skillImg = heroName + "_" + cleanseName(skill) + ".png";

        return (
          <div key={idx} className="flex my-8 text-base">
            <div className="mr-6">
              <img
                className="legendary-shard"
                src={
                  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/" +
                  skillImg
                }
              />
            </div>
            <div>
              <div className="inline-block text-lg text-gray-200 underline uppercase font-skill">
                {skill}
              </div>
              {Object.keys(heroSkills[skill]).map((shard, shardIdx) => {
                return (
                  <div key={shardIdx} className="">
                    <div className="text-2xl uppercase legendary-shard-name font-skill">
                      {shard}
                    </div>
                    <div className="pb-2 font-description">
                      {heroSkills[skill][shard]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
