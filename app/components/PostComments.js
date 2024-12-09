import getPostComments from "@/lib/getPostComments";

async function PostComments({ postId }) {
  const comments = await getPostComments(postId);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comments</h2>
      {comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="bg-blue-50 p-4 rounded-lg shadow-md"
            >
              <h3 className="font-bold text-gray-800">{comment.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium text-gray-700">Email:</span>{" "}
                {comment.email}
              </p>
              <p className="text-gray-700">{comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No comments available for this post.</p>
      )}
    </div>
  );
}

export default PostComments;
