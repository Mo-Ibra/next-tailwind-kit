const Breadcrumb1 = () => {
  return (
    <section
      className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://shadcnblocks.com/images/block/placeholder-dark-1.svg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative">
        <div className="grid grid-cols-1 text-center mt-10">
          <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">
            Services / Features
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb1;
