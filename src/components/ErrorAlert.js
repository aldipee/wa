import Layout from './Layout'

export default function ErrorAlert({ children }) {
  return (
    <Layout>
      <h1 className="text-6xl font-bold text-white mb-8">Oops...</h1>
      <div className="bg-red-500 text-white font-bold p-3 rounded-md">
        😵 {children}
      </div>
    </Layout>
  )
}
