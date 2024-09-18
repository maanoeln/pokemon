import { Footer, FooterInfo, Text } from '@/components/Footer/styles';
import SocialMediaComponent from '@/components/SocialMedia';

function FooterComponent() {
  return (
    <Footer>
      <FooterInfo>
        <SocialMediaComponent />
        <Text>©2024 Manoel Neto</Text>
      </FooterInfo>
    </Footer>
  );
}

export default FooterComponent;
