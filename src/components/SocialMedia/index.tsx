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
          {elem.icon}
        </Link>
      ))}
    </SocialMedia>
  );
}

export default SocialMediaComponent;
