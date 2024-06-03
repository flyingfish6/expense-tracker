"use client";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import { Input } from "../../../../../components/ui/input";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { Button } from "../../../../../components/ui/button";
import { PenBox } from "lucide-react";
import GlobalApi from "../../../../server/GlobalApi";
import { toast } from "sonner";
const EditBudget = ({ id, getBudgetById }) => {
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const getBudget = () => {
    GlobalApi.GEtBudgetById(id).then((resp) => {
      //   console.log(resp.data);
      if (resp) {
        setAmount(resp.data.amount);
        setName(resp.data.name);
        setEmojiIcon(resp.data.icon);
      }
    });
  };
  const onUpdateBudget = () => {
    GlobalApi.UpdateBudget(id, name, amount, emojiIcon).then((resp) => {
      if (resp) {
<<<<<<< HEAD
        // console.log(resp.data);
=======
        console.log(resp.data);
>>>>>>> 6151ac86b38e966d264bfaae4f7010b25286d0b1
        getBudgetById();
        toast("update budget successfully!");
      }
    });
  };
  useEffect(() => {
    getBudget();
    getBudgetById();
  }, []);
<<<<<<< HEAD
  // console.log(name);
=======
  console.log(name);
>>>>>>> 6151ac86b38e966d264bfaae4f7010b25286d0b1
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex  gap-2">
            <PenBox /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  variant="outline"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >
                  {emojiIcon}
                </Button>
                <div className=" mb-2">
                  <EmojiPicker
                    value={emojiIcon}
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    value={name}
                    placeholder="bugdet name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    value={amount}
                    type="number"
                    placeholder="100￥"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!name || !amount}
                onClick={() => {
                  onUpdateBudget();
                }}
                className="mt-5 w-full"
              >
                Upadte Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditBudget;
