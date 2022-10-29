import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBellConcierge,
  faHome,
  faLinesLeaning,
  faPersonShelter,
  faPhone,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <footer className=" text-slate-700 text-sm">
      <div className="grid  grid-cols-3 gap-2 h-auto mt-10 font-poppin  ">
        <div className=" col-start-1 col-end-2">
          {' '}
          <ul className="p-4  leading-7">
            <Link href="/">
              <li className="flex items-center cursor-pointer ">
                <FontAwesomeIcon className="icon text-icon" icon={faHome} />
                <span className="ml-1">Home </span>
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center cursor-pointer ">
                <FontAwesomeIcon
                  className="icon text-icon"
                  icon={faBellConcierge}
                />
                <span className="ml-1">Nos Services </span>
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center cursor-pointer ">
                <FontAwesomeIcon
                  className="icon text-icon"
                  icon={faPersonShelter}
                />
                <span className="ml-1">Propriétaires</span>
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center cursor-pointer ">
                <FontAwesomeIcon className="icon text-icon" icon={faPlane} />
                <span className="ml-1">Voyageurs</span>
              </li>
            </Link>
              <Link href="/">
                <li className="flex items-center cursor-pointer">
                  <FontAwesomeIcon className="icon text-icon" icon={faBed} />
                  <span className="ml-1">Locations</span>
                </li>
              </Link>

            <Link href="/">
              <li className="flex items-center cursor-pointer ">
                <FontAwesomeIcon
                  className="icon text-icon"
                  icon={faLinesLeaning}
                />
                <span className="ml-1">Location de Linge</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className=" col-start-2 col-span-2 leading-7">
          <ul className="p-4 ">
            <li>
              <p className="text-2xl font-poppin">
                Conciergerie <span className="font-lobster">St Gervais</span>{' '}
              </p>
            </li>

            <li>
              <p className>96 rue du Mont Blanc</p>
            </li>
            <li>
              <p>74170 Saint Gervais les Bains </p>
            </li>
            <li>
              <p className="flex items-center mt-4">
                {' '}
                <FontAwesomeIcon
                  className="icon text-icon"
                  icon={faEnvelope}
                />{' '}
                contact@conciergerie-saint-gervais.com{' '}
              </p>
            </li>
            <li>
              <p className="flex items-center mt-4">
                {' '}
                <FontAwesomeIcon
                  className="icon text-icon"
                  icon={faPhone}
                />{' '}
                +33 6 07 85 90 58{' '}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className="p-4 text-xs text-center mt-10">
        copyright © 2022 Conciergerie{' '}
        <span className="font-lobster">St Gervais</span>{' '}
      </p>
    </footer>
  );
}

export default Footer;
