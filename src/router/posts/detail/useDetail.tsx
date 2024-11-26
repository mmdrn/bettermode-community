import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import {
  AddReactionToPostParams,
  RemoveReactionFromPostParams,
} from "../../../api/post/reaction/types";
import { addReactionToPost, removeReactionFromPost } from "../../../api/post/reaction";
import { AVAILABLE_REACTIONS } from "../../../api/post/reaction/constants";
import { GetPostDetailResponse, PostReaction } from "../../../api/post/single/types";
import { getPostDetails } from "../../../api/post/single";

export default function usePostDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, refetch, isError } = useQuery<GetPostDetailResponse>(
    ["post-detail", params],
    () => getPostDetails({ id: params.postId! }),
    {
      onError: () => {
        navigate("/not-found");
      },
    }
  );

  const { mutateAsync: addReaction, isLoading: isAddingReaction } = useMutation<
    unknown,
    unknown,
    AddReactionToPostParams
  >(["add-reaction-to-post"], (params) => addReactionToPost(params), {
    onSuccess: () => {
      refetch();
    },
  });

  const { mutateAsync: removeReaction, isLoading: isRemoveingReaction } = useMutation<
    unknown,
    unknown,
    RemoveReactionFromPostParams
  >(["remove-reaction-from-post"], (params) => removeReactionFromPost(params), {
    onSuccess: () => {
      refetch();
    },
  });

  const handleClickReaction = (reaction: (typeof AVAILABLE_REACTIONS)[number]["key"]) => {
    if (
      data?.post.reactions.some(
        (item: PostReaction) => item.reacted === true && item.reaction === reaction
      )
    ) {
      removeReaction({
        reaction: reaction,
        postId: params.postId!,
      });
    } else {
      addReaction({
        postId: params.postId!,
        input: {
          overrideSingleChoiceReactions: true,
          reaction: reaction,
        },
      });
    }
  };

  return {
    get: {
      data,
      isLoading,
      isFetching,
      isAddingReaction,
      isRemoveingReaction,
      isError,
    },
    on: {
      handleClickReaction,
      refetch,
    },
  };
}
