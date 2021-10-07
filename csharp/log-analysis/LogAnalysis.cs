using System;

public static class LogAnalysis 
{
    public static string SubstringAfter(this string str, string delimeter) {
        return str.Split(delimeter)[1];
    }

    public static string SubstringBetween(this string str, string firstDelimeter, string secondDelimeter) {
        int first = str.IndexOf('[') + 1;
        int last = str.IndexOf(']');
        return str.Substring(first, last - first);
    }
    
    public static string Message(this string str) => str.SubstringAfter(":").Trim();

    public static string LogLevel(this string str) => "not implemented";
}