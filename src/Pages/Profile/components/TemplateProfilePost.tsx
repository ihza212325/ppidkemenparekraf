import { Calendar } from "lucide-react";

function TemplateProfilePost({
  title,
  creator,
  created_at,
  subtitle,
  image_url,
}: {
  title: string;
  creator: string;
  created_at: string;
  subtitle: string;
  image_url: string[];
}) {
  const RenderImage = () => {
    return image_url.map((e: any) => {
      return <img src={e} className="w-full" alt="Flowbite Logo" />;
    });
  };
  return (
    <>
      <div className="flex flex-col mx-36 mt-24 mb-24 gap-8 w-1/2 text-[#142a49]">
        <div className="flex flex-col gap-8">
          <p className="text-4xl font-jakartaBold">{title}</p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-4 items-center">
              <div className="w-8 h-8 bg-red-400 rounded-full" />
              <p>{creator}</p>
              <div className="flex flex-row gap-2">
                <Calendar />
                <p>{created_at}</p>
              </div>
            </div>
            <p className="font-jakartaBold text-lg">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <RenderImage />
        </div>
      </div>
    </>
  );
}

export default TemplateProfilePost;
