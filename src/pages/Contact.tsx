import { FC } from 'react';
import { ContactBox } from '../components/ContactBox';

export const Contact: FC = () => {
  return (
    <article className={'md:h-full'}>
      <div className={'flex'}>
        <h1 className={'md:hidden mx-auto leading-loose text-3xl'}>contact &amp; imprint</h1>
      </div>
      <div className="grid md:grid-cols-3 md:h-full">
        <div className="md:col-span-2">
          <div className={'p-2'}>
            <div className={'2xl:flex 2xl:justify-end'}>
              <div className={'2xl:flex 2xl:flex-col 2xl:w-[66%]'}>
                <h1 className={'hidden md:block'}>contact &amp; imprint</h1>
                <h2>Information about the service provider</h2>
                <p>Albert Pichler
                </p>
                <div className='px-4 mt-2'>
                  <ContactBox width={300}/>
                </div>
                <p>
                  Address: Petrusgasse 5/2/11, 1030 Vienna
                </p>
                <h2>Audiovisual media services</h2>
                <p>Responsible regulatory or supervisory authority: Communications Authority Austria (KommAustria), https://www.rtr.at</p>
                <h2>
                  EU dispute resolution
                </h2>
                <p>
                  In accordance with the regulation on online dispute resolution in consumer matters (ODR regulation), we would like to inform you about the online dispute resolution platform (OS platform). Consumers have the opportunity to submit complaints to the European Commission's online dispute resolution platform at https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE. You can find the necessary contact details above in our legal notice.</p>
                <p>
                  However, we would like to point out that we are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
                <h2>
                  Liability for content on this website
                </h2>
                <p>
                  We are constantly developing the content of this website and strive to provide correct and up-to-date information. Unfortunately, we cannot accept any liability for the correctness of all content on this website, especially for that provided by third parties. As a service provider, we are not obliged to monitor the information you submit or store or to investigate circumstances that indicate illegal activity.
                </p>
                <p>
                  Our obligations to remove information or to block the use of information in accordance with general laws due to court or official orders remain unaffected even if we are not responsible.
                </p>
                <p>
                  If you notice problematic or illegal content, please contact us immediately so that we can remove the illegal content. You can find the contact details in the imprint.
                </p>
                <h2>
                  Liability for links on this website
                </h2>
                <p>
                  Our website contains links to other websites for whose content we are not responsible. We are not liable for linked websites because we had and have no knowledge of any illegal activities, we have not noticed any such illegalities to date and we would remove links immediately if we became aware of any illegalities.
                </p>
                <p>
                  If you notice any illegal links on our website, please contact us. You can find the contact details in the imprint.
                </p>
                <h2>Copyright notice</h2>
                <p>
                  All content on this website (images, photos, texts, videos) is subject to copyright. Please ask us before you distribute, copy or use the content of this website, such as republishing it on other websites. If necessary, we will legally pursue the unauthorized use of parts of the content of our site.
                </p>
                <p>
                  If you find content on this website that violates copyright, please contact us.
                </p>

                <h2>
                  Copyrights
                </h2>
                <p>
                  The images, photos and graphics on this website are protected by copyright.
                </p>
                <p>
                  The image rights for all images on the resume page belong to Albert Pichler
                </p>
                <p>Other images have the ownerships stated underneath them.</p>
                <p>
                  All texts are protected by copyright.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={'row-start-1 md:row-start-auto bg-blue min-h-12'}>
          <div
            className={'flex flex-row-reverse md:flex-col justify-evenly'}
          ></div>
        </div>
      </div>
    </article >
  );
};
