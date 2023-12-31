"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Flex,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ IssueId }: { IssueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const deletIssue = async () => {
    try {
      await axios.delete(`/api/issues/${IssueId}`);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <AlertDialogRoot>
        <AlertDialogTrigger>
          <Button color="red">
            <TrashIcon />
            Delete Issue
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent style={{ maxWidth: 450 }}>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this issue? This action can not be
            undone
          </AlertDialogDescription>
          <Flex gap="3" mt="4">
            <AlertDialogCancel>
              <Button color="gray" variant="soft">
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button color="red" onClick={deletIssue}>
                Delete
              </Button>
            </AlertDialogAction>
          </Flex>
        </AlertDialogContent>
      </AlertDialogRoot>
      <AlertDialogRoot open={error}>
        <AlertDialogContent>
          <AlertDialogTitle>Error</AlertDialogTitle>
          <AlertDialogDescription>
            This Issue can not be deleted
          </AlertDialogDescription>
          <Button
            color="gray"
            variant="soft"
            mt="3"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialogContent>
      </AlertDialogRoot>
    </>
  );
};

export default DeleteIssueButton;
