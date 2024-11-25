import { 
    Card,
    CardHeader,
    CardTitle, 
    CardDescription,
    CardContent  } from "./ui/card";

    const PostCard = ({ body, title }: { body: string, title: string}) => {
        return <Card className="bg-gradient-to-r from-black to-slate-400 text-white">
          <CardHeader>
              <CardTitle className="text-pink-400">{title}</CardTitle>
          </CardHeader>
          <CardContent>
              <CardDescription className="text-white">
                  {body}
              </CardDescription>
          </CardContent>
        </Card>
      };
      
      export default PostCard;