/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// @ts-ignore
function ClientReviewCard({ feedback }) {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-8">
      <p className="text-black text-center">{feedback?.comment}</p>

      <div className="flex items-center justify-between">
        <img
          src={feedback?.user?.profileImageUrl}
          alt="Testimonial image"
          className="inline-block h-16 w-16 rounded-full object-contain"
        />
        <div className="flex flex-col">
          <h6 className="text-sm font-bold md:text-base text-teal-950">
            {feedback?.user?.fullName}
          </h6>
          <p className="text-sm text-hcOrange-base">Reviewer Name</p>
        </div>
      </div>
    </div>
  );
}

export default ClientReviewCard;
