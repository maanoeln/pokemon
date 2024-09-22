import Icons from '@/components/Icons';
import { SOCIAL_MEDIA_ITEMS } from '@/components/SocialMedia/socialMediaItems';
import { Link, SocialMedia } from '@/components/SocialMedia/styles';

function SocialMediaComponent() {
  return (
    <SocialMedia>
      {SOCIAL_MEDIA_ITEMS.map((elem) => (
        <Link
          href={elem.href}
          key={elem.name}
          target="_blank"
          aria-label={elem.name}
        >
          <Icons name={elem.name} viewBox="0 0 24 24" />
        </Link>
      ))}
    </SocialMedia>
  );
}

export default SocialMediaComponent;
