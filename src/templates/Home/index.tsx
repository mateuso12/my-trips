import LinkWrapper from 'components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline';

import dynamic from 'next/dynamic';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({places}: MapProps) {
  return (
    <>
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="/sobre"/>
      </LinkWrapper>
      <Map places={places}/>
    </>
  );
}
