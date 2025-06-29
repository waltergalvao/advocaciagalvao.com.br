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
import { ContatoForm } from "./contato/contato-form";

interface ModalContatoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalContato({ isOpen, onClose }: ModalContatoProps) {
  return (
    <div className="shrink-0" data-aos="fade-left">
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={onClose}>
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
              <DialogPanel className="w-full overflow-hidden">
                <ContatoForm />
              </DialogPanel>
            </div>
          </TransitionChild>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}
