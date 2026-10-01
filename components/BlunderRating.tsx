type Props = {
  score?: number;
  status?: string;
};


export default function BlunderRating({
  score,
  status
}: Props) {


return (

<div className="card mt-10">


<h2 className="text-2xl font-bold">
🔥 Blunder AI Rating
</h2>


<div className="text-5xl font-bold gradient-text mt-5">

{score || 0}/100

</div>


<p className="mt-3 text-gray-300">

Status:

<span className="text-green-400">

{status || "Waiting Analysis"}

</span>

</p>


</div>

);

}
