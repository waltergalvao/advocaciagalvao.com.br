"use client";

import { useState, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

interface ModalVideo01Props {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
}

export default function ModalVideo01({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
}: ModalVideo01Props) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="shrink-0" data-aos="fade-left">
      {/* Video thumbnail */}
      <div className="flex justify-center items-center">
        <div className="relative cursor-pointer">
          <div
            className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10"
            aria-hidden="true"
          ></div>
          <Image
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
            onClick={() => {
              setModalOpen(true);
            }}
          />
        </div>
        <button
          className="absolute group rounded-full bg-red-500 animate-glow text-white p-4"
          onClick={() => {
            setModalOpen(true);
          }}
          aria-label="Watch the video"
        >
          <IconPlayerPlayFilled size={32} stroke={1.5} />
        </button>
      </div>
      {/* End: Video thumbnail */}

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <TransitionChild
            as="div"
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <TransitionChild
            as="div"
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <DialogPanel className="w-full max-h-full aspect-video bg-black overflow-hidden min-h-[80vh]">
                <iframe
                  height="100%"
                  width="100%"
                  src="https://www.youtube.com/embed/NpBdAWDp7MA?si=e2ux4dnNDl2okHqA&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </DialogPanel>
            </div>
          </TransitionChild>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}
