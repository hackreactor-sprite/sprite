export default function RelatedProducts({currProduct}) {
  console.log('this', currProduct);
  return (
  <>
  <div>Related Products</div>
  <div>{currProduct}</div>
  </>
  )
}
