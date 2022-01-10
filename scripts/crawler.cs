// @nuget: HtmlAgilityPack

using System;
using System.Linq;
using HtmlAgilityPack;
					
public class Program
{
	public static void Main()
	{
		HtmlWeb web = new HtmlWeb();
		var htmlDoc = web.Load("https://publicatie.centrumvoorstandaarden.nl/");

        var title = htmlDoc.DocumentNode.SelectSingleNode("//head/title");
		var meta = htmlDoc.DocumentNode.SelectNodes("//head/meta");
		var body = htmlDoc.DocumentNode.SelectSingleNode("//body");

		Console.WriteLine("Datum;Locatie;Titel;Generator");
		
		Crawler(body, "href");
	}
	
	private static void Crawler(HtmlNode node, string attribute)
	{
		if (node.ChildNodes.Count() > 1)
		{
			foreach (HtmlNode child in node.ChildNodes)
			{
				Crawler(child, attribute);
			}
		}
		else
		{
			var att = node.Attributes.FirstOrDefault(x => x.Name.Equals(attribute));
			if (att is object)
			{
				if (att.Name.Equals("href"))
				{
					string url = att.Value;
					if (url.Contains("/api/") | url.Contains("/dk/"))
					{
						GetVersion(url);
					}
				}
				else if (att.Name.Equals("datetime"))
				{
					Console.Write(att.Value + ";");
				}
			}
		}
	}
	
	private static void GetVersion(string url)
	{
		HtmlWeb web = new HtmlWeb();
		var htmlDoc = web.Load(url);
		
		var title = htmlDoc.DocumentNode.SelectSingleNode("//head/title");
		var meta = htmlDoc.DocumentNode.SelectNodes("//head/meta");
		var body = htmlDoc.DocumentNode.SelectSingleNode("//body");
		
		Crawler(body, "datetime");
		
		foreach (HtmlNode node in meta)
		{
			if (node.Attributes.Any(x => x.Value.Equals("generator")))
			{
				string version = node.Attributes.First(x => x.Name.Equals("content")).Value;
				Console.Write(url + ";");
				Console.Write(title.InnerHtml + ";");
				Console.Write(version + "\n");
			}
		}
	}
}
