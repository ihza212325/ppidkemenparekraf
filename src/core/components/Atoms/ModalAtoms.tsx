import { GalleryThumbnails, X } from "lucide-react";
import { memo, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ModalAtoms({
  isVisible,
  onClose,
  children,
  title,
}: {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: String;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <section className="absolute">
          {/* Overlay with animation */}
          <motion.div
            className="fixed top-0 h-full w-full bg-black/50 left-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className="flex justify-center h-full">
              {/* Modal Card with animation */}
              <motion.div
                className="overflow-hidden my-auto rounded-md w-full max-w-2xl p-6  bg-neutralModalBackground"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <section className="flex justify-between pb-4">
                  <div className="flex flex-row gap-4">
                    <GalleryThumbnails className="text-[#89BDFF]" />
                    <p className="font-primary text-neutralWhite font-bold text-xl my-auto uppercase">
                      {title}
                    </p>
                  </div>
                  <button onClick={onClose}>
                    <X className="text-neutralWhite" />
                  </button>
                </section>
                <div className="flex flex-col space-y-4">
                  <div className="w-screen border-t -ml-16 border-grayBody"></div>
                  {children}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      )}
    </AnimatePresence>
  );
}

export default memo(ModalAtoms);
