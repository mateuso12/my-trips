import { NextSeo } from 'next-seo';

import LinkWrapper from 'components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline';

import dynamic from 'next/dynamic';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo 
      title="My Trips" 
      description="Um simples projeto para mostrar lugares onde viajei"
      canonical="https://my-trips.mateusousa.com.br"
      openGraph= {{ 
        url: "http://my-trips.mateusousa.com.br",
        title: "My Trips",
        description: "Um simples projeto para mostrar lugares onde viajei",
        site_name:"My Trips"
      }}
       />
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="/sobre" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
