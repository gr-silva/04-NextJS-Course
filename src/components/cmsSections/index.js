import { PageFAQDisplayQuestionsSection } from "../../infra/cms/PageFAQDisplayQuestionsSection";
import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PageHomeHeroSection } from "./PageHomeHeroSection";
import { SEOBlock } from "./SeoBlock";

export const cmsSections = {
  // CommonSeoBlockRecord: (props) => <SEOBlock {...props} />,
  PagefaqDisplayquestionSectionRecord: PageFAQDisplayQuestionsSection,
  CommonSeoBlockRecord: SEOBlock,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagehomeHerosectionRecord: PageHomeHeroSection,
  CommonFooterRecord: (props) => <Footer {...props} />,
};
