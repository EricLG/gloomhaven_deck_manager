import { Component, OnInit } from '@angular/core';
import { Card } from './../model/card';

// Services
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {

  cards: Card[] = [];

  constructor(
    private cardService: CardService
    ) { }

  ngOnInit() {
    this.getCardsList();
   }

   getCardsList() {
    // const allCards = this.nameCards();
    const allCards = this.nameCardsFew();
    allCards.forEach(filename => {
      const splitCardInfo = filename.split('-', 5);
      const card = new Card( null, this.manageName(filename), splitCardInfo[1], splitCardInfo[3], filename, splitCardInfo[0]);
      this.cards.push(card);
    });
   }

  importAllCards() {
    console.log('Import all cards');
    this.cards.forEach(card => {
      this.cardService.saveCard(card).subscribe((result: any): void  =>  {
        console.log(result);
      });
    });
  }

  manageName(filename) {
    const regexName = /.{15}(.*).jpg/;
    const rawName = filename.match(regexName)[1];
    return rawName.replace(/-/g, ' ');
  }

   nameCardsFew() {
    return [
      '001-BR-Cards-1-Trample.jpg',
      '002-BR-Cards-1-Eye-for-an-Eye.jpg',
      '003-BR-Cards-1-Sweeping-Blow.jpg',
      '004-BR-Cards-1-Provoking-Roar.jpg',
      '005-BR-Cards-1-Overwhelming-Assault.jpg',
      '042-TI-Cards-X-Reviving-Shock.jpg',
      '043-TI-Cards-X-Volatile-Concoction.jpg',
      '044-TI-Cards-X-Potent-Potables.jpg',
      '045-TI-Cards-2-Stamina-Booster.jpg',
      '046-TI-Cards-2-Disorienting-Flash.jpg',
      '047-TI-Cards-3-Tinkerer\'s-Tools.jpg',
      '048-TI-Cards-3-Crank-Bow.jpg',
      '077-SW-Cards-4-Forked-Beam.jpg',
      '078-SW-Cards-5-Chromatic-Explosion.jpg',
      '079-SW-Cards-5-Engulfed-in-Flames.jpg',
      '080-SW-Cards-6-Living-Torch.jpg',
      '081-SW-Cards-6-Frozen-Night.jpg',
      '082-SW-Cards-7-Twin-Restoration.jpg',
      '108-SC-Cards-6-Crippling-Poison.jpg',
      '109-SC-Cards-6-Burning-Oil.jpg',
      '110-SC-Cards-7-Stick-to-the-Shadows.jpg',
      '111-SC-Cards-7-Spring-the-Trap.jpg',
      '112-SC-Cards-8-Stiletto-Storm.jpg',
      '113-SC-Cards-8-Pain\'s-End.jpg',
      '116-MT-Cards-1-Submissive-Affliction.jpg',
      '117-MT-Cards-1-Into-the-Night.jpg',
      '118-MT-Cards-1-Fearsome-Blade.jpg',
      '119-MT-Cards-1-Feedbacl-Loop.jpg',
      '120-MT-Cards-1-Gnawing-Horde.jpg',
      '166-CH-Cards-5-Stone-Pummel.jpg',
      '167-CH-Cards-6-Dig-Pit.jpg',
      '168-CH-Cards-6-Cataclysm.jpg',
      '169-CH-Cards-7-Meteor.jpg',
      '170-CH-Cards-7-Brutal-Momentum.jpg',
      '171-CH-Cards-8-Rocky-End.jpg',
    ];
  }

   nameCards() {
    return [
      '000-BR-Cards-Back.jpg',
      '000-CH-Cards-Back.jpg',
      '000-MT-Cards-Back.jpg',
      '000-SC-Cards-Back.jpg',
      '000-SW-Cards-Back.jpg',
      '000-TI-Cards-Back.jpg',
      '001-BR-Cards-1-Trample.jpg',
      '002-BR-Cards-1-Eye-for-an-Eye.jpg',
      '003-BR-Cards-1-Sweeping-Blow.jpg',
      '004-BR-Cards-1-Provoking-Roar.jpg',
      '005-BR-Cards-1-Overwhelming-Assault.jpg',
      '006-BR-Cards-1-Grab-and-Go.jpg',
      '007-BR-Cards-1-Barding-Strength.jpg',
      '008-BR-Cards-1-Shield-Bash.jpg',
      '009-BR-Cards-1-Leaping-Cleave.jpg',
      '010-BR-Cards-1-Spare-Dagger.jpg',
      '011-BR-Cards-X-Skewer.jpg',
      '012-BR-Cards-X-Balanced-Measure.jpg',
      '013-BR-Cards-X-Wall-of-Doom.jpg',
      '014-BR-Cards-2-Fatal-Advance.jpg',
      '015-BR-Cards-2-Juggernaut.jpg',
      '016-BR-Cards-3-Hook-and-Chain.jpg',
      '017-BR-Cards-3-brute-Force.jpg',
      '018-BR-Cards-4-Unstoppable-Charge.jpg',
      '019-BR-Cards-4-Devastating-Hack.jpg',
      '020-BR-Cards-5-Whirlwind.jpg',
      '021-BR-Cards-5-Skirmishing-Maneuver.jpg',
      '022-BR-Cards-6-Quietus.jpg',
      '023-BR-Cards-6-Immovable-Phalanx.jpg',
      '024-BR-Cards-7-Defensive-Tactics.jpg',
      '025-BR-Cards-7-Crippling-Offensive.jpg',
      '026-BR-Cards-8-Frenzied-Onslaught.jpg',
      '027-BR-Cards-8-Selfish-Retribution.jpg',
      '028-BR-Cards-9-King-of-the-Hill.jpg',
      '029-BR-Cards-9-Face-Your-End.jpg',
      '030-TI-Cards-1-Proximity-Mine.jpg',
      '031-TI-Cards-1-Harmless-Contraption.jpg',
      '032-TI-Cards-1-Flamethrower.jpg',
      '033-TI-Cards-1-Hook-Gun.jpg',
      '034-TI-Cards-1-Ink-Bomb.jpg',
      '035-TI-Cards-1-Net-Shooter.jpg',
      '036-TI-Cards-1-Stun-Shot.jpg',
      '037-TI-Cards-1-Reinvigorating-Elixir.jpg',
      '038-TI-Cards-1-Restorative-Mist.jpg',
      '039-TI-Cards-1-Energizing-Tonic.jpg',
      '040-TI-Cards-1-Enhancement-Field.jpg',
      '041-TI-Cards-1-Toxic-Bolt.jpg',
      '042-TI-Cards-X-Reviving-Shock.jpg',
      '043-TI-Cards-X-Volatile-Concoction.jpg',
      '044-TI-Cards-X-Potent-Potables.jpg',
      '045-TI-Cards-2-Stamina-Booster.jpg',
      '046-TI-Cards-2-Disorienting-Flash.jpg',
      '047-TI-Cards-3-Tinkerer\'s-Tools.jpg',
      '048-TI-Cards-3-Crank-Bow.jpg',
      '049-TI-Cards-4-Dangerous-Contraption.jpg',
      '050-TI-Cards-4-Micro-Bots.jpg',
      '051-TI-Cards-5-Noxious-Vials.jpg',
      '052-TI-Cards-5-Disintegration-Beam.jpg',
      '053-TI-Cards-6-Gas-Canister.jpg',
      '054-TI-Cards-6-Auto-Turret.jpg',
      '055-TI-Cards-7-Murderous-Contraption.jpg',
      '056-TI-Cards-7-Curative-Aerosol.jpg',
      '057-TI-Cards-8-Jet-Propulsion.jpg',
      '058-TI-Cards-8-Harsh-Stimulants.jpg',
      '059-TI-Cards-9-Lethal-Injection.jpg',
      '060-TI-Cards-9-Chimeric-Formula.jpg',
      '061-SW-Cards-1-Fire-Orbs.jpg',
      '062-SW-Cards-1-Impaling-Eruption.jpg',
      '063-SW-Cards-1-Reviving-Ether.jpg',
      '064-SW-Cards-1-Freezing-Nova.jpg',
      '065-SW-Cards-1-Mana-Bolt.jpg',
      '066-SW-Cards-1-Frost-Armor.jpg',
      '067-SW-Cards-1-Flame-Strike.jpg',
      '068-SW-Cards-1-Ride-the-Wind.jpg',
      '069-SW-Cards-X-Crackling-Air.jpg',
      '070-SW-Cards-X-Hardened-Spikes.jpg',
      '071-SW-Cards-X-Aid-from-the-Ether.jpg',
      '072-SW-Cards-2-Flashing-Bust.jpg',
      '073-SW-Cards-2-Icy-Blast.jpg',
      '074-SW-Cards-3-Cold-Fire.jpg',
      '075-SW-Cards-3-Elemental-Aid.jpg',
      '076-SW-Cards-4-Spirit-of-Doom.jpg',
      '077-SW-Cards-4-Forked-Beam.jpg',
      '078-SW-Cards-5-Chromatic-Explosion.jpg',
      '079-SW-Cards-5-Engulfed-in-Flames.jpg',
      '080-SW-Cards-6-Living-Torch.jpg',
      '081-SW-Cards-6-Frozen-Night.jpg',
      '082-SW-Cards-7-Twin-Restoration.jpg',
      '083-SW-Cards-7-Stone-Fists.jpg',
      '084-SW-Cards-8-ephyr-Wings.jpg',
      '085-SW-Cards-8-Cold-Front.jpg',
      '086-SW-Cards-9-Black-Hole.jpg',
      '087-SW-Cards-9-Inferno.jpg',
      '088-SC-Cards-1-Single-Out.jpg',
      '089-SC-Cards-1-Flanking-Strike.jpg',
      '090-SC-Cards-1-Smoke-Bomb.jpg',
      '091-SC-Cards-1-Backstab.jpg',
      '092-SC-Cards-1-Thief\'s-Knack.jpg',
      '093-SC-Cards-1-Venom-Shiv.jpg',
      '094-SC-Cards-1-Throwing-Knives.jpg',
      '095-SC-Cards-1-Quick-Hand.jpg',
      '096-SC-Cards-1-Special-Mixture.jpg',
      '097-SC-Cards-X-Sinister-Opportunity.jpg',
      '098-SC-Cards-X-Trickster\'s-Reversal.jpg',
      '099-SC-Cards-X-Swift-Bow.jpg',
      '100-SC-Cards-2-Open-Wound.jpg',
      '101-SC-Cards-2-Flintlock.jpg',
      '102-SC-Cards-3-Hidden-Daggers.jpg',
      '103-SC-Cards-3-Duelist\'s-Advance.jpg',
      '104-SC-Cards-4-Flurry-of-Blades.jpg',
      '105-SC-Cards-4-Gruesome-Advantage.jpg',
      '106-SC-Cards-5-Cull-the-Weak.jpg',
      '107-SC-Cards-5-Visage-of-the-Inevitable.jpg',
      '108-SC-Cards-6-Crippling-Poison.jpg',
      '109-SC-Cards-6-Burning-Oil.jpg',
      '110-SC-Cards-7-Stick-to-the-Shadows.jpg',
      '111-SC-Cards-7-Spring-the-Trap.jpg',
      '112-SC-Cards-8-Stiletto-Storm.jpg',
      '113-SC-Cards-8-Pain\'s-End.jpg',
      '114-SC-Cards-9-Long-Con.jpg',
      '115-SC-Cards-9-Watch-It-Burn.jpg',
      '116-MT-Cards-1-Submissive-Affliction.jpg',
      '117-MT-Cards-1-Into-the-Night.jpg',
      '118-MT-Cards-1-Fearsome-Blade.jpg',
      '119-MT-Cards-1-Feedbacl-Loop.jpg',
      '120-MT-Cards-1-Gnawing-Horde.jpg',
      '121-MT-Cards-1-The-Minf\'s-Weakness.jpg',
      '122-MT-Cards-1-Parasitic-Influence.jpg',
      '123-MT-Cards-1-Scurry.jpg',
      '124-MT-Cards-1-Perverse-Edge.jpg',
      '125-MT-Cards-1-Empathetic-Assault.jpg',
      '126-MT-Cards-X-Withering-Claw.jpg',
      '127-MT-Cards-X-Possession.jpg',
      '128-MT-Cards-X-Frigid-Apparition.jpg',
      '129-MT-Cards-2-Wretched-Creature.jpg',
      '130-MT-Cards-2-Hostile-Takeover.jpg',
      '131-MT-Cards-3-Brain-Leech.jpg',
      '132-MT-Cards-3-Silent-Scream.jpg',
      '133-MT-Cards-4-Pilfer.jpg',
      '134-MT-Cards-4-Cranium-Overlord.jpg',
      '135-MT-Cards-5-Mass-Hysteria.jpg',
      '136-MT-Cards-5-Frozen-Mind.jpg',
      '137-MT-Cards-6-Corrupting-Embrace.jpg',
      '138-MT-Cards-6-Dark-Frenzy.jpg',
      '139-MT-Cards-7-Vicious-Blood.jpg',
      '140-MT-Cards-7-Psychic-Projection.jpg',
      '141-MT-Cards-8-Shared-Nightmare.jpg',
      '142-MT-Cards-8-Domination.jpg',
      '143-MT-Cards-9-Many-as-One.jpg',
      '144-MT-Cards-9-Phantasmal-Killer.jpg',
      '145-CH-Cards-1-Opposing-Strike.jpg',
      '146-CH-Cards-1-Crushing-Grasp.jpg',
      '147-CH-Cards-1-Avalanche.jpg',
      '148-CH-Cards-1-Rumbling-Advance.jpg',
      '149-CH-Cards-1-Massive-Boulder.jpg',
      '150-CH-Cards-1-Backup-Ammunition.jpg',
      '151-CH-Cards-1-Rock-Tunnel.jpg',
      '152-CH-Cards-1-Unstoppable-Upheaval.jpg',
      '153-CH-Cards-1-Crater.jpg',
      '154-CH-Cards-1-Dirt-Tornado.jpg',
      '155-CH-Cards-1-Earthen-Cloud.jpg',
      '156-CH-Cards-X-Heaving-Swing.jpg',
      '157-CH-Cards-X-Forceful-Storm.jpg',
      '158-CH-Cards-X-Nature\'s-Lift.jpg',
      '159-CH-Cards-2-Explosive-Punch.jpg',
      '160-CH-Cards-2-Sentient-Growth.jpg',
      '161-CH-Cards-3-Clear-the-Way.jpg',
      '162-CH-Cards-3-Blunt-Force.jpg',
      '163-CH-Cards-4-Rock-Slide.jpg',
      '164-CH-Cards-4-Kinetic-Assault.jpg',
      '165-CH-Cards-5-Petrify.jpg',
      '166-CH-Cards-5-Stone-Pummel.jpg',
      '167-CH-Cards-6-Dig-Pit.jpg',
      '168-CH-Cards-6-Cataclysm.jpg',
      '169-CH-Cards-7-Meteor.jpg',
      '170-CH-Cards-7-Brutal-Momentum.jpg',
      '171-CH-Cards-8-Rocky-End.jpg',
      '172-CH-Cards-8-Lumbering-Bash.jpg',
      '173-CH-Cards-9-Blind-Destruction.jpg',
      '174-CH-Cards-9-Pulverize.jpg'
    ];
   }
}
