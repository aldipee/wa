import Layout from './Layout'
import LoadingBlock from './LoadingBlock'

const LoadingHome = () => (
  <Layout>
    <section className="mb-8">
      <LoadingBlock width={200} height={40} className="mb-3" />

      <div className="grid gap-3 grid-cols-4">
        <LoadingBlock width="100%" height={380} className="mr-2" />
        <LoadingBlock width="100%" height={380} className="mr-2" />
        <LoadingBlock width="100%" height={380} className="mr-2" />
        <LoadingBlock width="100%" height={380} className="mr-2" />
      </div>
    </section>

    <section>
      <LoadingBlock width={200} height={40} className="mb-3" />

      <div className="grid gap-4 grid-cols-5">
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
        <LoadingBlock width="100%" height={290} />
      </div>
    </section>
  </Layout>
)

export default LoadingHome
