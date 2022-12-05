import {Reward} from "../types/reward";
import {db} from "../../config";
import {OkPacket, RowDataPacket} from "mysql2";
import mysqlPromise from "mysql2/promise";
import { connectionData } from "../../config";



  export async function findRewardsSentFromStudent (IDUser: string){
  
    const queryString = "SELECT SUM(xp_points) as points from reward where id_user_sender = ?";
    const connection = await mysqlPromise.createConnection(connectionData);
    const rewardsSent = await connection.execute(queryString, [IDUser]);
    return rewardsSent;
  }

  export async function findRewardsReceivedFromStudent (IDUser: string){
  
    const queryString = "SELECT SUM(xp_points) as points from reward where id_user_rewarded = ?";
    const connection = await mysqlPromise.createConnection(connectionData);
    const rewardsReceived = await connection.execute(queryString, [IDUser]);
    return rewardsReceived;
  }