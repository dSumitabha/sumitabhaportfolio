import GitHubSection from "./components/GithubSection";
import Introduction from "./components/Introduction";
import SkillsGrid from "./components/SkillsGrid";

export default function Home() {
  return (
    <>
		<Introduction />
		<SkillsGrid />
		<GitHubSection />
    </>
  );
}
