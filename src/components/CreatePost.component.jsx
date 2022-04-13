import { db } from "../firebase";
import { useFormInput } from "../hooks";
import { collection, doc, setDoc } from "firebase/firestore";

export default function CreatePost() {
  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

  async function handleSubmit(e) {
    e.preventDefault();
    const postsRef = collection(db, "posts");

    await setDoc(doc(postsRef), {
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="">Title</label>
          <input {...title} required />
        </div>
        <div className="form-field">
          <label htmlFor="">Sub Title</label>
          <input {...subTitle} />
        </div>
        <div className="form-field">
          <label htmlFor="">Content</label>
          <textarea {...content} required></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}
